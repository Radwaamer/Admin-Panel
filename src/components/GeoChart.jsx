import { ResponsiveChoropleth } from '@nivo/geo'
import { useTheme } from '@mui/material/styles';
import { tokens } from './../theme';
import { geoFeatures, geoData } from '../data/dummy-data';
import { useEffect } from 'react';
import { useState } from 'react';

const GeoChart = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const chartTheme={
        "textColor": colors.grey[100],
        "tooltip": {
            "container": {
                "background": "#ffffff",
                "color": "#333"
            }
        }
    };

    const [geo,setgeo]=useState(true);
    useEffect(()=>{
        (window.location.hash.includes("geo")) ? setgeo(true) : setgeo(false)
    },[window.location.hash])

    return(
        <ResponsiveChoropleth
        data={geoData}
        features={ geoFeatures.features }
        theme={chartTheme}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        graticuleLineWidth={0}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={geo ? [
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 0,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ] : undefined}
    />
    );
};

export default GeoChart;