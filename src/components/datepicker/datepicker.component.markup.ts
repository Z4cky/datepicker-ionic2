export const datepicker_markup =
    `
    <div class="datepicker-modal-container">
    <div class="datepicker-modal" [style.width]="full?'100%':''" [style.height]="full?'100%':''">
        <div class="datepicker-modal-head datepicker-balanced white bold" [ngClass]="hClasses">
            <div class="datepicker-modal-title">{{getSelectedWeekday()}}</div>
        </div>
        <div class="center datepicker-balanced-light" [ngClass]="dClasses">
            <div class="row">
                <div class="col datepicker-month-js datepicker-month" (click)="changeType('month')">
                    {{limitTo(getSelectedMonth(),3)}}
                </div>
            </div>
            <div class="row">
                <div class="col datepicker-day-of-month " (click)="changeType('date')">
                    {{selectedDate | date: 'd'}}
                </div>
            </div>
            <div class="row">
                <div class="col datepicker-year-js datepicker-year " (click)="changeType('year')">
                    {{selectedDate | date: 'yyyy'}}
                </div>
            </div>
        </div>
        <div class="datepicker-month-content-js datepicker-content" *ngIf="showType('month')">
            <div class="row center" *ngFor="let month of getMonths(); let i = index;">
                <div class="col datepicker-selection datepicker-date-cell" [ngClass]="{
                  'datepicker-selected': isSelectedMonth(i),
                  'datepicker-current': isActualMonth(i)
                  }" (click)="selectMonth(i)">
                    {{limitTo(month,3)}}
                </div>
            </div>
        </div>
        <div #dayscroll class="datepicker-content" *ngIf="showType('date')">
           <!-- <div class="row col center">
                {{getTempMonth()}} {{tempDate | date: 'yyyy'}}
            </div>
            <div class="row center">
				<div class="col bold" *ngFor="let dayOfWeek of getDaysOfWeek(); let i = index;">
					{{limitTo(dayOfWeek,3)}}
				</div>
			</div>-->
            <div class="datepicker-content">
                <div class="row center" *ngFor="let row of rows;let i = index">
                    <div class="col no-padding" *ngFor="let col of cols;let j =index" [ngClass]="{
                  'datepicker-date-col': isDefined(getDate(i, j)),
                  'datepicker-selected': isSelectedDate(getDate(i, j)),
                  'datepicker-current' : isActualDate(getDate(i, j)),
                  'datepicker-disabled': isDisabled(getDate(i, j))
                  }">
                        <div class="datepicker-date-cell" (click)="selectDate(getDate(i, j))">
                            {{ getDate(i, j) | date: 'd' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div #yearscroll class="datepicker-year-content-js datepicker-content" *ngIf="showType('year')">
            <div class="row center" *ngFor="let year of getYears();let i = index;">
                <div class="col datepicker-selection datepicker-date-cell" [ngClass]="{
                  'datepicker-selected': isSelectedYear(year),
                  'datepicker-current': isActualYear(year)
                  }" (click)="selectYear(year)">
                    {{year}}
                </div>
            </div>
        </div>
        <div class="datepicker-calendar" *ngIf="showType('calendar')">
            <div class="row col center">
            <button (click)="prevMonth()" ion-button="" class="disable-hover button button-ios button-default button-default-ios"><span class="button-inner"><ion-icon name="arrow-back" role="img" class="icon icon-ios ion-ios-arrow-back" aria-label="arrow-back" ng-reflect-name="arrow-back"></ion-icon></span><div class="button-effect"></div></button>

              {{getTempMonth()}}  {{getTempYear()}}
     <button (click)="nextMonth()" ion-button="" class="disable-hover button button-ios button-default button-default-ios"><span class="button-inner"><ion-icon name="arrow-forward" role="img" class="icon icon-ios ion-ios-arrow-forward" aria-label="arrow-forward" ng-reflect-name="arrow-forward"></ion-icon></span><div class="button-effect"></div></button>            </div>
            <div *ngFor="let week of rows;let i = index;" class="row calendar-row">
                <span class="col calendar-cell datepicker-selection datepicker-date-cell" *ngFor="let day of cols;let j=index;" [ngClass]="{
                  'datepicker-date-col': isDefined(getDate(i, j)),
                  'datepicker-selected': isSelectedDate(getDate(i, j)),
                  'datepicker-current' : isActualDate(getDate(i, j)),
                  'datepicker-disabled': isDisabled(getDate(i, j))
                  }" (click)="selectDate(getDate(i, j))">
					{{getDate(i, j) | date:'d'}}
				</span>
            </div>
        </div>
        <div class="datepicker-modal-buttons">
                    <button (click)="onCancel($event)" ion-button="" class="datepicker-cancel-js button button-clear button-small col-offset-33 disable-hover button button-ios button-default button-default-ios"><span class="button-inner">{{cancelText}}</span><div class="button-effect"></div></button>
                    <button (click)="onDone($event)" ion-button="" class="datepicker-ok-js button button-clear button-small disable-hover button button-ios button-default button-default-ios"><span class="button-inner">{{okText}}</span><div class="button-effect"></div></button>
        </div>
    </div>
</div>
`;