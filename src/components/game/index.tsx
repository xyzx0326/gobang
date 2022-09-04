import {Board, Piece} from "@/components";
import {BoardSizeType} from "@/config/board";
import {GridData, PieceType} from "@/stores/game";

import React from 'react';
import {Layer, Stage} from "react-konva";

type GameProps = {
    pieces: PieceType[]; // 棋子数据
    selectGrid?: GridData; // 选择的棋子
    selfIsWhite?: boolean;
    boardSize: BoardSizeType; // 棋盘规格

    onGridSelect?: (data: GridData) => void;
    onPiecePut?: (data: number) => void;
}

const Game: React.FC<GameProps> = ({
                                       pieces, selectGrid,selfIsWhite, boardSize,
                                       onGridSelect, onPiecePut
                                   }) => {
    const {board, boardGrid, boardEdge, pieceRadius} = boardSize

    return (
        <Stage width={board} height={board}>
            <Board boardSize={boardSize} selectGrid={selectGrid} selfIsWhite={selfIsWhite} onGridSelect={onGridSelect}/>
            <Layer x={boardEdge} y={boardEdge}>
                {pieces.map(piece => {
                    return <Piece key={piece.num}
                                  num={piece.num}
                                  rowIndex={piece.rowIndex}
                                  colIndex={piece.colIndex}
                                  boardGrid={boardGrid}
                                  radius={pieceRadius}
                    />;
                })}
            </Layer>
        </Stage>
    );
}

export default Game;
