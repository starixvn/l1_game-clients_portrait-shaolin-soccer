import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CustomAutoNumberLabel')
export class CustomAutoNumberLabel extends Component {
    @property(Label)
    targetLabel: Label = null;

    @property
    normalFontSize = 52;

    @property
    shrinkFontSize = 40;

    @property
    shrinkThreshold = 1000;

    private lastString = '';

    start() {
        if (this.targetLabel) {
            this.updateFontSize();
        }
    }

    update(deltaTime: number) {
        if (this.targetLabel && this.targetLabel.string !== this.lastString) {
            this.lastString = this.targetLabel.string;
            this.updateFontSize();
        }
    }

    private updateFontSize() {
        const value = parseInt(this.targetLabel.string);
        
        if (!isNaN(value) && value >= this.shrinkThreshold) {
            this.targetLabel.fontSize = this.shrinkFontSize;
        } else {
            this.targetLabel.fontSize = this.normalFontSize;
        }
    }
}

