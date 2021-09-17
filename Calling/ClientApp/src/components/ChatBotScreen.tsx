import * as React from 'react';
import { Stack, PrimaryButton, Image ,IImageStyles } from '@fluentui/react';
import { videoCameraIconStyle, imgStyle } from './styles/HomeScreen.styles';
import heroSVG from '../assets/hero.svg';

import { VideoCameraEmphasisIcon } from '@fluentui/react-icons-northstar';



export interface ChatBotProps {
    startChatBotHandler(): void;
    homeHandler(): void;
}

const imageStyleProps: IImageStyles = {
    image: {
        height: '100%',
        width: '100%'
    },
    root: {}
};


const card = (
    <React.Fragment>
        <Stack>
            <span>
                <iframe src='https://webchat.botframework.com/embed/Demo-WebAppBotCSCB?s=vd5CsDcS9o0.PW_lu_1rtrOVem9r_fRtCwFKq6qpHP53sgIksNsgoYI'
                    height="400px"
                    width="500px"
                   
                   ></iframe>
            </span>
        </Stack>




    </React.Fragment>
);


export default (props: ChatBotProps): JSX.Element => {
    const imageProps = { src: heroSVG.toString() };
    return (

        <Stack> { card}
            < PrimaryButton onClick={props.homeHandler} >
                <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium" />
                Start a Call
            </PrimaryButton >
            <Image
                alt="Welcome to the Azure Communication Services Calling sample app"
                className={imgStyle}
                styles={imageStyleProps}
                height = "200px"
                {...imageProps}
            />
           
      
        </Stack >
        
    );
};

