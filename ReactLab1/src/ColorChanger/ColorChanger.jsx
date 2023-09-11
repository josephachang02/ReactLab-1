import React, {useState} from 'react';

function ColorChanger() {
    const [backgroundColor, setBackgroundColor] = useState('antiquewhite');

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
        const handleButtonClick = () => {
            const randomColor = getRandomColor();
            setBackgroundColor(randomColor); 
        document.body.style.backgroundColor = randomColor;
      };

      return (
        <div>
          <button onClick={handleButtonClick}>Change Color</button>
        </div>
      );
    }
    
    export default ColorChanger;