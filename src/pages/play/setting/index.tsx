import {Modal} from "@/components";
import {boardSize} from "@/config/board";

import React from 'react';

import './index.scss'

type SettingProps = {
    open: boolean
    onClose: () => void
}

const RuleSetting: React.FC<SettingProps> = ({open, onClose}) => {

    return <Modal
        open={open}
        width={boardSize.board * 0.8 + 40}
        onClose={() => {
            onClose()
        }}
    >
        <div className="rule-setting">
            <div className="rule-item">棋子规则:</div>

        </div>
    </Modal>;
}

export default RuleSetting;
