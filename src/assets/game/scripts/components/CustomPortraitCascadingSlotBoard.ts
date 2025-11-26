import { _decorator, Node } from 'cc';
import { PortraitCascadingSlotBoard } from 'db://shared-cascading-slot/components/slot-board/components/portrait-cascading-slot-board';
const { ccclass, property } = _decorator;

@ccclass('CustomPortraitCascadingSlotBoard')
export class CustomPortraitCascadingSlotBoard extends PortraitCascadingSlotBoard {
    @property(Node)
    CustomPortraitCascadingSlotBoard: Node = null;

    // Override showPeekEffect to sync CustomPortraitCascadingSlotBoard
    showPeekEffect(inTumble: boolean, reelIndex: number, row = 0) {
        super.showPeekEffect(inTumble, reelIndex, row);
        
        if (this.CustomPortraitCascadingSlotBoard) {
            this.CustomPortraitCascadingSlotBoard.active = true;
        }
    }

    // Override hidePeekEffects to sync CustomPortraitCascadingSlotBoard
    hidePeekEffects() {
        super.hidePeekEffects();
        
        if (this.CustomPortraitCascadingSlotBoard) {
            this.CustomPortraitCascadingSlotBoard.active = false;
        }
    }
}

