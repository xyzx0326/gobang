import {SelectLine} from "@/components";
import {BoardSizeType} from "@/config/board";
import {GridData} from "@/stores/game";

import Konva from "konva";
import {LineCap, LineJoin} from "konva/lib/Shape";
import React, {useEffect, useState} from 'react';
import {Group, Layer, Line, Rect} from "react-konva";

type BoardProps = {
    boardSize: BoardSizeType;
    selfIsWhite?: boolean;
    selectGrid: GridData | undefined;

    onGridSelect?: (data: GridData) => void;
}


const Board: React.FC<BoardProps> = ({boardSize, selfIsWhite, selectGrid, onGridSelect}) => {
    const [lines, setLines] = useState<Konva.LineConfig[]>([]);
    const [rects, setRects] = useState<Konva.RectConfig[]>([]);
    const {board, boardGrid, boardEdge} = boardSize;

    // 棋盘线格
    useEffect(() => {
        const ret = [];
        const lineColor = '#baa17e';
        const dot1 = boardGrid * 3;
        const dot2 = boardGrid * 7;
        const dot3 = boardGrid * 11;
        const dotWidth = 5;
        for (let i = 0; i < 15; i++) {
            ret.push({
                points: [0, boardGrid * i, board - boardEdge * 2, boardGrid * i],
                stroke: lineColor,
                strokeWidth: 1
            });
            ret.push({
                points: [boardGrid * i, 0, boardGrid * i, board - boardEdge * 2],
                stroke: lineColor,
                strokeWidth: 1
            });
        }
        ret.push({
            points: [dot1, dot1, dot1, dot1],
            stroke: lineColor,
            strokeWidth: dotWidth,
            lineCap: 'round' as LineCap,
            lineJoin: 'round' as LineJoin
        })
        ret.push({
            points: [dot3, dot3, dot3, dot3],
            stroke: lineColor,
            strokeWidth: dotWidth,
            lineCap: 'round' as LineCap,
            lineJoin: 'round' as LineJoin
        })
        ret.push({
            points: [dot1, dot3, dot1, dot3],
            stroke: lineColor,
            strokeWidth: dotWidth,
            lineCap: 'round' as LineCap,
            lineJoin: 'round' as LineJoin
        })
        ret.push({
            points: [dot3, dot1, dot3, dot1],
            stroke: lineColor,
            strokeWidth: dotWidth,
            lineCap: 'round' as LineCap,
            lineJoin: 'round' as LineJoin
        })
        ret.push({
            points: [dot2, dot2, dot2, dot2],
            stroke: lineColor,
            strokeWidth: dotWidth,
            lineCap: 'round' as LineCap,
            lineJoin: 'round' as LineJoin
        })
        setLines(ret)
    }, [board, boardGrid, boardEdge])

    //隐形操作区
    useEffect(() => {
        const ret = [];
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                ret.push({
                    row: j,
                    col: i,
                    x: boardGrid * i,
                    y: boardGrid * j,
                    width: boardGrid,
                    height: boardGrid,
                    fill: i % 2 === j % 2 ? 'red' : 'black',
                });
            }
        }
        setRects(ret)
    }, [boardGrid])

    const onClick = (data: GridData) => {
        onGridSelect && onGridSelect(data)
    }

    return (
        <Layer>
            <Rect
                width={board}
                height={board}
                fill='#eee1bb'
            />
            <Group x={boardEdge} y={boardEdge}>
                {lines.map((line, i) =>
                    <Line
                        key={i}
                        points={line.points}
                        stroke={line.stroke}
                        strokeWidth={line.strokeWidth}
                        lineCap={line.lineCap}
                        lineJoin={line.lineJoin}
                    />
                )}
            </Group>
            <Group x={boardEdge - boardGrid / 2} y={boardEdge - boardGrid / 2}>
                {selectGrid ? <SelectLine boardGrid={boardGrid}
                                          color={selfIsWhite ? "#fff" : "#000"}
                                          x={selectGrid.colIndex * boardGrid + boardGrid / 2}
                                          y={selectGrid.rowIndex * boardGrid + boardGrid / 2}
                /> : <></>}
                {rects.map((rect, i) =>
                    <Rect
                        key={i}
                        x={rect.x}
                        y={rect.y}
                        width={rect.width}
                        height={rect.height}
                        // fill={rect.fill}
                        // opacity={0.05}
                        onClick={() => onClick({rowIndex: rect.row, colIndex: rect.col})}
                        onTap={() => onClick({rowIndex: rect.row, colIndex: rect.col})}
                    />
                )}
            </Group>
        </Layer>
    );
}

export default Board;
