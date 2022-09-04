import black from '@/assets/black.png';
import white from '@/assets/white.png';

import Konva from "konva";
import React, {useRef} from 'react';
import {Group, Image as KImage} from "react-konva";

type NavProps = {
    num: number; // 当前棋子
    rowIndex: number; // 所在行
    colIndex: number; // 所在列
    boardGrid: number; // 棋盘格子大小
    radius: number; // 半径
}

const Piece: React.FC<NavProps> = ({
                                       num,
                                       rowIndex,
                                       colIndex,
                                       boardGrid,
                                       radius,
                                   }) => {
    const nodeRef = useRef<Konva.Group>(null);

    const x = colIndex * boardGrid;
    const y = rowIndex * boardGrid;

    const image = new Image();
    image.src = num > 0 ? white : black;

    const shadow = {
        shadowColor: "#000",
        shadowBlur: 5,
        shadowOffset: {x: 2, y: 3},
        shadowOpacity: 0.6
    }

    return (
        <Group
            ref={nodeRef}
            x={x}
            y={y}
        >
            <KImage
                image={image}
                width={radius * 2}
                height={radius * 2}
                x={-radius}
                y={-radius}
                {...shadow}
            />
        </Group>
    );
}

export default Piece;
