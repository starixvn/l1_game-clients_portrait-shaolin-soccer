import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CustomAutoNumberLabel')
export class CustomAutoNumberLabel extends Component {
    @property(Label)
    targetLabel: Label = null;

    @property
    normalFontSize: number = 52;

    @property
    shrinkFontSize: number = 40;

    @property
    shrinkThreshold: number = 1000;

    private lastString: string = '';

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

