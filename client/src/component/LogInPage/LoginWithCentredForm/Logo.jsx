import { chakra, useColorModeValue, useToken } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props) => {
    const [white, black] = useToken('colors', ['white', 'gray.800'])
    return (
        <chakra.svg
            color={useColorModeValue('blue.500', 'blue.300')}
            aria-hidden
            viewBox="0 0 123 24"
            fill="none"
            h="6"
            flexShrink={0}
            {...props}
        >
            <path
                // d="M23 0H7a1 1 0 00-1 1v16H3c-1.654 0-3 1.346-3 3v4h14v-3.583c0-.808.645-1.417 1.5-1.417.723 0 1.5.47 1.5 1.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V1a1 1 0 00-1-1zM12 20.417V22H2v-2a1 1 0 011-1h9.304c-.196.43-.304.909-.304 1.417zM20 13H10v-2h10v2zm0-6H10V5h10v2z"
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill={useColorModeValue(black, white)}
                // fill="currentColor"
            />
            {/*<path*/}
            {/*  d="M36.102 19h10.142v-2.855h-6.627v-2.99h6.108v-2.862h-6.108V7.31h6.627V4.455H36.102V19zM51.518 12.778c.007-1.242.732-1.981 1.833-1.981 1.1 0 1.754.724 1.747 1.932V19h3.473v-6.953c.007-2.457-1.492-4.098-3.786-4.098-1.612 0-2.833.817-3.316 2.145h-.121V8.09h-3.303V19h3.473v-6.222zM70.513 8.09h-3.658l-2.017 7.515h-.113l-2.01-7.514h-3.658L62.793 19h3.977l3.743-10.91zM76.192 19.206c2.863 0 4.745-1.385 5.142-3.53l-3.189-.092c-.27.724-.98 1.115-1.889 1.115-1.335 0-2.159-.888-2.159-2.223v-.092h7.273v-.867c0-3.594-2.188-5.568-5.284-5.568-3.296 0-5.412 2.258-5.412 5.64 0 3.493 2.088 5.617 5.518 5.617zm-2.095-6.84c.05-1.086.91-1.91 2.06-1.91 1.143 0 1.967.796 1.981 1.91h-4.04zM86.217 4.455h-3.473V19h3.473V4.455zM93.12 19.206c3.43 0 5.511-2.266 5.511-5.625 0-3.367-2.08-5.632-5.511-5.632-3.43 0-5.512 2.265-5.512 5.632 0 3.36 2.081 5.625 5.512 5.625zm.021-2.62c-1.285 0-1.996-1.222-1.996-3.026 0-1.811.71-3.04 1.996-3.04 1.243 0 1.953 1.229 1.953 3.04 0 1.804-.71 3.025-1.953 3.025zM100.01 23.091h3.473v-5.86h.071c.441 1.01 1.421 1.925 3.068 1.925 2.415 0 4.361-1.889 4.361-5.603 0-3.85-2.059-5.604-4.339-5.604-1.726 0-2.671 1.008-3.09 2.01h-.106V8.09h-3.438v15zm3.402-9.546c0-1.782.739-2.883 2.01-2.883 1.286 0 1.996 1.13 1.996 2.883 0 1.762-.71 2.905-1.996 2.905-1.271 0-2.01-1.136-2.01-2.904zM117.503 19.206c2.862 0 4.744-1.385 5.142-3.53l-3.189-.092c-.27.724-.98 1.115-1.89 1.115-1.335 0-2.159-.888-2.159-2.223v-.092h7.273v-.867c0-3.594-2.187-5.568-5.284-5.568-3.295 0-5.412 2.258-5.412 5.64 0 3.493 2.088 5.617 5.519 5.617zm-2.096-6.84c.05-1.086.909-1.91 2.06-1.91 1.144 0 1.967.796 1.982 1.91h-4.042z"*/}
            {/*  fill={useColorModeValue(black, white)}*/}
            {/*/>*/}


            <path vector-effect='non-scaling-stroke' transform='translate(0,100)'
                  d='M55.8 0.0C55.8 0.0 35.6 -30.4 35.6 -30.4M9.9 0.0C9.9 0.0 9.9 -66.0 9.9 -66.0C9.9 -66.0 33.8 -66.0 33.8 -66.0C40.27 -66.0 45.37 -64.4 49.1 -61.2C52.83 -58.0 54.7 -53.6 54.7 -48.0C54.7 -42.4 52.83 -38.0 49.1 -34.8C45.37 -31.6 40.27 -30.0 33.8 -30.0C33.8 -30.0 33.5 -30.0 33.5 -30.0C33.5 -30.0 10.0 -30.0 10.0 -30.0'/>
            <path vector-effect='non-scaling-stroke' transform='translate(55.8,100)'
                  d='M27.2 0.0C27.2 0.0 27.2 -65.85 27.2 -65.85M1.1 -66.0C1.1 -66.0 27.2 -66.0 27.2 -66.0C27.2 -66.0 53.3 -66.0 53.3 -66.0'/>
            <path vector-effect='non-scaling-stroke' transform='translate(109.1,100)'
                  d='M61.0 -16.5C59.93 -12.83 58.17 -9.67 55.7 -7.0C53.3 -4.4 50.33 -2.4 46.8 -1.0C43.33 0.33 39.37 1.0 34.9 1.0C29.1 1.0 24.0 -0.37 19.6 -3.1C15.2 -5.9 11.77 -9.83 9.3 -14.9C6.83 -19.97 5.6 -26.0 5.6 -33.0C5.6 -40.0 6.8 -46.03 9.2 -51.1C11.67 -56.17 15.1 -60.07 19.5 -62.8C23.9 -65.6 29.03 -67.0 34.9 -67.0C39.57 -67.0 43.6 -66.33 47.0 -65.0C50.4 -63.73 53.23 -61.8 55.5 -59.2C57.77 -56.67 59.43 -53.47 60.5 -49.6'/>
            <path vector-effect='non-scaling-stroke' transform='translate(170.1,100)'
                  d='M28.5 -51.0C33.1 -51.0 37.13 -49.97 40.6 -47.9C44.13 -45.83 46.87 -42.83 48.8 -38.9C50.8 -35.03 51.8 -30.4 51.8 -25.0C51.8 -19.6 50.8 -14.93 48.8 -11.0C46.87 -7.13 44.13 -4.17 40.6 -2.1C37.13 -0.03 33.1 1.0 28.5 1.0C23.9 1.0 19.83 -0.03 16.3 -2.1C12.83 -4.17 10.1 -7.13 8.1 -11.0C6.1 -14.93 5.1 -19.6 5.1 -25.0C5.1 -30.4 6.1 -35.03 8.1 -38.9C10.1 -42.83 12.83 -45.83 16.3 -47.9C19.83 -49.97 23.9 -51.0 28.5 -51.0C28.5 -51.0 28.5 -51.0 28.5 -51.0'/>
            <path vector-effect='non-scaling-stroke' transform='translate(221.9,100)'
                  d='M10.1 -50.0C10.1 -50.0 10.1 0.0 10.1 0.0M10.0 -36.3C10.73 -39.1 12.07 -41.6 14.0 -43.8C15.93 -46.07 18.33 -47.83 21.2 -49.1C24.07 -50.37 27.3 -51.0 30.9 -51.0C34.77 -51.0 38.07 -50.27 40.8 -48.8C43.6 -47.4 45.73 -45.37 47.2 -42.7C48.73 -40.03 49.5 -36.77 49.5 -32.9C49.5 -32.9 49.5 0.0 49.5 0.0'/>
            <path vector-effect='non-scaling-stroke' transform='translate(271.4,100)'
                  d='M1.2 -49.35C1.2 -49.35 31.4 -49.35 31.4 -49.35M11.2 0.0C11.2 0.0 11.2 -58.3 11.2 -58.3C11.2 -60.7 11.5 -62.83 12.1 -64.7C12.7 -66.57 13.57 -68.13 14.7 -69.4C15.9 -70.73 17.3 -71.73 18.9 -72.4C20.57 -73.13 22.43 -73.5 24.5 -73.5C26.43 -73.5 28.0 -73.2 29.2 -72.6C30.4 -72.07 31.4 -71.33 32.2 -70.4'/>
            <path vector-effect='non-scaling-stroke' transform='translate(303.6,100)'
                  d='M5.21 -25.5C5.21 -25.5 48.6 -25.5 48.6 -25.5C48.6 -25.5 48.6 -25.9 48.6 -25.9C48.6 -25.9 48.6 -26.2 48.6 -26.2C48.6 -31.33 47.73 -35.73 46.0 -39.4C44.33 -43.13 41.93 -46.0 38.8 -48.0C35.67 -50.0 31.9 -51.0 27.5 -51.0C27.5 -51.0 27.5 -51.0 27.5 -51.0C23.3 -51.0 19.5 -49.97 16.1 -47.9C12.77 -45.83 10.1 -42.87 8.1 -39.0C6.1 -35.13 5.1 -30.47 5.1 -25.0C5.1 -19.6 6.1 -14.93 8.1 -11.0C10.17 -7.13 12.93 -4.17 16.4 -2.1C19.93 -0.03 23.9 1.0 28.3 1.0C31.23 1.0 34.0 0.53 36.6 -0.4C39.2 -1.4 41.5 -2.77 43.5 -4.5C45.5 -6.3 47.07 -8.43 48.2 -10.9'/>
            <path vector-effect='non-scaling-stroke' transform='translate(352.2,100)'
                  d='M10.1 -50.0C10.1 -33.33 10.1 -16.67 10.1 0.0M10.1 -37.0C11.72 -42.62 15.59 -47.95 21.18 -50.1C24.89 -51.33 29.35 -51.56 32.75 -49.35C33.06 -49.13 33.34 -48.88 33.6 -48.6'/>
            <path vector-effect='non-scaling-stroke' transform='translate(385.8,100)'
                  d='M5.21 -25.5C5.21 -25.5 48.6 -25.5 48.6 -25.5C48.6 -25.5 48.6 -25.9 48.6 -25.9C48.6 -25.9 48.6 -26.2 48.6 -26.2C48.6 -31.33 47.73 -35.73 46.0 -39.4C44.33 -43.13 41.93 -46.0 38.8 -48.0C35.67 -50.0 31.9 -51.0 27.5 -51.0C27.5 -51.0 27.5 -51.0 27.5 -51.0C23.3 -51.0 19.5 -49.97 16.1 -47.9C12.77 -45.83 10.1 -42.87 8.1 -39.0C6.1 -35.13 5.1 -30.47 5.1 -25.0C5.1 -19.6 6.1 -14.93 8.1 -11.0C10.17 -7.13 12.93 -4.17 16.4 -2.1C19.93 -0.03 23.9 1.0 28.3 1.0C31.23 1.0 34.0 0.53 36.6 -0.4C39.2 -1.4 41.5 -2.77 43.5 -4.5C45.5 -6.3 47.07 -8.43 48.2 -10.9'/>
            <path vector-effect='non-scaling-stroke' transform='translate(434.4,100)'
                  d='M10.1 -50.0C10.1 -50.0 10.1 0.0 10.1 0.0M10.0 -36.3C10.73 -39.1 12.07 -41.6 14.0 -43.8C15.93 -46.07 18.33 -47.83 21.2 -49.1C24.07 -50.37 27.3 -51.0 30.9 -51.0C34.77 -51.0 38.07 -50.27 40.8 -48.8C43.6 -47.4 45.73 -45.37 47.2 -42.7C48.73 -40.03 49.5 -36.77 49.5 -32.9C49.5 -32.9 49.5 0.0 49.5 0.0'/>
            <path fill="currentColor" vector-effect='non-scaling-stroke' transform='translate(483.9,100)'
                  d='M48.2 -13.7C47.67 -10.7 46.4 -8.1 44.4 -5.9C42.47 -3.7 40.07 -2.0 37.2 -0.8C34.33 0.4 31.2 1.0 27.8 1.0C23.4 1.0 19.5 -0.03 16.1 -2.1C12.7 -4.17 10.0 -7.13 8.0 -11.0C6.07 -14.93 5.1 -19.6 5.1 -25.0C5.1 -30.4 6.1 -35.03 8.1 -38.9C10.1 -42.83 12.83 -45.83 16.3 -47.9C19.77 -49.97 23.7 -51.0 28.1 -51.0C31.43 -51.0 34.43 -50.47 37.1 -49.4C39.77 -48.33 42.0 -46.77 43.8 -44.7C45.67 -42.7 47.0 -40.23 47.8 -37.3'/>
            <path fill={useColorModeValue(black, white)} vector-effect='non-scaling-stroke'
                  transform='translate(532.1,100)'
                  d='M5.21 -25.5C5.21 -25.5 48.6 -25.5 48.6 -25.5C48.6 -25.5 48.6 -25.9 48.6 -25.9C48.6 -25.9 48.6 -26.2 48.6 -26.2C48.6 -31.33 47.73 -35.73 46.0 -39.4C44.33 -43.13 41.93 -46.0 38.8 -48.0C35.67 -50.0 31.9 -51.0 27.5 -51.0C27.5 -51.0 27.5 -51.0 27.5 -51.0C23.3 -51.0 19.5 -49.97 16.1 -47.9C12.77 -45.83 10.1 -42.87 8.1 -39.0C6.1 -35.13 5.1 -30.47 5.1 -25.0C5.1 -19.6 6.1 -14.93 8.1 -11.0C10.17 -7.13 12.93 -4.17 16.4 -2.1C19.93 -0.03 23.9 1.0 28.3 1.0C31.23 1.0 34.0 0.53 36.6 -0.4C39.2 -1.4 41.5 -2.77 43.5 -4.5C45.5 -6.3 47.07 -8.43 48.2 -10.9'/>
            <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
            />
        </chakra.svg>
    )
}