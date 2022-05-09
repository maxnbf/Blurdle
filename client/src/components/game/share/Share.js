import React, { useMemo } from 'react';
import CopyToClipboard from "react-copy-to-clipboard";
import { ShareButton } from './style';

const Share = ({guesses, person}) => {

    const text = useMemo(() => {
        
        let result = Array.from(Array(5).keys()).map((index) => {
            console.log(guesses, index, person)
            if(guesses[index] !== person && index < guesses.length) {
                return "🟥";
            } else if (guesses[index] === person) {
                return "🟩";
            } else {
                return "⬜";
            }
        }).join('')
        return [result, "https://blurdle.net"].join("\n");
      }, [guesses, person]);

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