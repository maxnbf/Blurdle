import React, { useMemo } from 'react';
import CopyToClipboard from "react-copy-to-clipboard";
import { ShareButton } from './style';

const Share = ({guesses, player}) => {

    const text = useMemo(() => {
        
        let result = Array.from(Array(5).keys()).map((index) => {
            if(guesses[index] !== player && index < guesses.length) {
                return "🟥";
            } else if (guesses[index] === player) {
                return "🟩";
            } else {
                return "⬜";
            }
        }).join('')
        return [result, "https://blurdle.net"].join("\n");
      }, [guesses, player]);

      return <CopyToClipboard
                    text={text}
                    options={{
                        format: "text/plain",
                    }}
                >
                    <ShareButton>
                        Share
                    </ShareButton>
                </CopyToClipboard>
          
    
}

export default Share;