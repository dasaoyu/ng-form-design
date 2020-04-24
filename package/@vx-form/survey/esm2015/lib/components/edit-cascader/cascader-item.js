/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "../../service/data.service";
export class VXSurveyEditCascaderItem {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.row = {
            cascader: 1,
            current: "",
            showadd: false,
            data: []
        };
        this.title = "";
        this.itemEvent = new EventEmitter();
        this.addOptionEvent = new EventEmitter();
        this.delOptionEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @param {?} e
     * @return {?}
     */
    itemClick(e) {
        this.row.current = e.value;
        this.itemEvent.emit(e);
    }
    /**
     * @return {?}
     */
    addOption() {
        /** @type {?} */
        let index = 0;
        if (this.row != null && this.row.data != null && this.row.data.length > 0) {
            index = this.row.data.length;
        }
        index++;
        /** @type {?} */
        let cascader = this.row.cascader;
        this.row.data.push({
            value: `${cascader}-${index}`,
            label: `选项${index}`,
            children: []
        });
        this.addOptionEvent.emit();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    delOption(e) {
        this.delOptionEvent.emit(e);
    }
}
VXSurveyEditCascaderItem.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-editcascader-item",
                template: `
    <div class="cascader_col_title">
      {{title}}
    </div>
    <div class="cascader_col_item vxsurvey-scrollbar">
      <ng-container *ngFor="let item of row.data;let index=index;">
        <div class="cascader_col_wrap" [ngClass]="{' wrap_active':item.value == row.current}" (click)="itemClick(item)">
      
                <div class="cascader_col_wrap_order">{{index+1}}.</div>
                <div class="cascader_col_wrap_input">
                    <input type="text" [(ngModel)]="item.label" maxlength="50">
                </div>
                <div class="cascader_col_wrap_limit">
                    {{item.label.length}}/50
                </div>
                <div class="cascader_col_wrap_delete" (click)="delOption(item)">
                    <span><i class="icon-KT-Close"></i></span>
                </div> 
        </div>
      </ng-container>
    </div>
    <div class="cascader_col_add" *ngIf="row?.showadd==true"(click)="addOption()">
      <span></span>添加选项
    </div>  
  `
            }] }
];
/** @nocollapse */
VXSurveyEditCascaderItem.ctorParameters = () => [
    { type: DataService }
];
VXSurveyEditCascaderItem.propDecorators = {
    row: [{ type: Input }],
    title: [{ type: Input }],
    itemEvent: [{ type: Output }],
    addOptionEvent: [{ type: Output }],
    delOptionEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    VXSurveyEditCascaderItem.prototype.row;
    /** @type {?} */
    VXSurveyEditCascaderItem.prototype.title;
    /** @type {?} */
    VXSurveyEditCascaderItem.prototype.itemEvent;
    /** @type {?} */
    VXSurveyEditCascaderItem.prototype.addOptionEvent;
    /** @type {?} */
    VXSurveyEditCascaderItem.prototype.delOptionEvent;
    /** @type {?} */
    VXSurveyEditCascaderItem.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2VkaXQtY2FzY2FkZXIvY2FzY2FkZXItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFnQ3pELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFZbkMsWUFBbUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFYbEMsUUFBRyxHQUFLO1lBQ2YsUUFBUSxFQUFDLENBQUM7WUFDVixPQUFPLEVBQUMsRUFBRTtZQUNWLE9BQU8sRUFBQyxLQUFLO1lBQ2IsSUFBSSxFQUFDLEVBQUU7U0FDUixDQUFDO1FBQ08sVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFJbkQsQ0FBQzs7OztJQUVELFFBQVE7SUFFUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUVsQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxDQUFLO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsU0FBUzs7WUFFSCxLQUFLLEdBQUUsQ0FBQztRQUNaLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7WUFDakUsS0FBSyxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM3QjtRQUNELEtBQUssRUFBRSxDQUFDOztZQUNKLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVE7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEtBQUssRUFBQyxHQUFHLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFDNUIsS0FBSyxFQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2xCLFFBQVEsRUFBQyxFQUFFO1NBQ1osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxDQUFLO1FBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBM0VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCUjthQUNGOzs7O1lBL0JRLFdBQVc7OztrQkFpQ2pCLEtBQUs7b0JBTUwsS0FBSzt3QkFDTCxNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTs7OztJQVRQLHVDQUtFOztJQUNGLHlDQUF5Qjs7SUFDekIsNkNBQThDOztJQUM5QyxrREFBbUQ7O0lBQ25ELGtEQUFtRDs7SUFFdkMsK0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RhdGEuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgSVRyZWVEYXRhLCBJQ2hlY2tlZFRyZWUgfSBmcm9tIFwiLi4vLi4vdG9vbHMvdXRpbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktZWRpdGNhc2NhZGVyLWl0ZW1cIixcclxuICB0ZW1wbGF0ZTpgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FzY2FkZXJfY29sX3RpdGxlXCI+XHJcbiAgICAgIHt7dGl0bGV9fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FzY2FkZXJfY29sX2l0ZW0gdnhzdXJ2ZXktc2Nyb2xsYmFyXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm93LmRhdGE7bGV0IGluZGV4PWluZGV4O1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXNjYWRlcl9jb2xfd3JhcFwiIFtuZ0NsYXNzXT1cInsnIHdyYXBfYWN0aXZlJzppdGVtLnZhbHVlID09IHJvdy5jdXJyZW50fVwiIChjbGljayk9XCJpdGVtQ2xpY2soaXRlbSlcIj5cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FzY2FkZXJfY29sX3dyYXBfb3JkZXJcIj57e2luZGV4KzF9fS48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXNjYWRlcl9jb2xfd3JhcF9pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiaXRlbS5sYWJlbFwiIG1heGxlbmd0aD1cIjUwXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXNjYWRlcl9jb2xfd3JhcF9saW1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbS5sYWJlbC5sZW5ndGh9fS81MFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FzY2FkZXJfY29sX3dyYXBfZGVsZXRlXCIgKGNsaWNrKT1cImRlbE9wdGlvbihpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiaWNvbi1LVC1DbG9zZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FzY2FkZXJfY29sX2FkZFwiICpuZ0lmPVwicm93Py5zaG93YWRkPT10cnVlXCIoY2xpY2spPVwiYWRkT3B0aW9uKClcIj5cclxuICAgICAgPHNwYW4+PC9zcGFuPua3u+WKoOmAiemhuVxyXG4gICAgPC9kaXY+ICBcclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleUVkaXRDYXNjYWRlckl0ZW0gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgcm93OmFueT17XHJcbiAgICBjYXNjYWRlcjoxLFxyXG4gICAgY3VycmVudDpcIlwiLFxyXG4gICAgc2hvd2FkZDpmYWxzZSxcclxuICAgIGRhdGE6W11cclxuICB9O1xyXG4gIEBJbnB1dCgpIHRpdGxlOnN0cmluZz1cIlwiOyBcclxuICBAT3V0cHV0KCkgaXRlbUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGFkZE9wdGlvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGRlbE9wdGlvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgICBcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICBpdGVtQ2xpY2soZTphbnkpe1xyXG4gICAgdGhpcy5yb3cuY3VycmVudCA9IGUudmFsdWU7XHJcbiAgICB0aGlzLml0ZW1FdmVudC5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgYWRkT3B0aW9uKCl7XHJcbiAgICAgXHJcbiAgICBsZXQgaW5kZXg9IDA7XHJcbiAgICBpZih0aGlzLnJvdyE9bnVsbCAmJiB0aGlzLnJvdy5kYXRhIT1udWxsICYmIHRoaXMucm93LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICBpbmRleD0gdGhpcy5yb3cuZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBpbmRleCsrO1xyXG4gICAgbGV0IGNhc2NhZGVyID0gdGhpcy5yb3cuY2FzY2FkZXI7XHJcbiAgICB0aGlzLnJvdy5kYXRhLnB1c2goe1xyXG4gICAgICB2YWx1ZTpgJHtjYXNjYWRlcn0tJHtpbmRleH1gLFxyXG4gICAgICBsYWJlbDpg6YCJ6aG5JHtpbmRleH1gLFxyXG4gICAgICBjaGlsZHJlbjpbXVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFkZE9wdGlvbkV2ZW50LmVtaXQoKTtcclxuICB9XHJcblxyXG4gIGRlbE9wdGlvbihlOmFueSl7XHJcbiAgICB0aGlzLmRlbE9wdGlvbkV2ZW50LmVtaXQoZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==