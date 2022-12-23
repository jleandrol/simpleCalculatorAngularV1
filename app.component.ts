import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-v1';
  result = '';
  operation = '';

  onClick0() {
    this.operation = this.operation + '0';
    this.doEvaluation();
  }
  onClick1() { this.operation = this.operation + '1';
    this.doEvaluation();
  }
  onClick2() { this.operation = this.operation + '2';
    this.doEvaluation();
  }
  onClick3() { this.operation = this.operation + '3'; }
  onClick4() { this.operation = this.operation + '4'; }
  onClick5() { this.operation = this.operation + '5'; }
  onClick6() { this.operation = this.operation + '6'; }
  onClick7() { this.operation = this.operation + '7'; }
  onClick8() { this.operation = this.operation + '8'; }
  onClick9() { this.operation = this.operation + '9'; }

  newOperation(newOperation) {
    if ( this.validate() == false ) { return }
    this.operation = this.operation + newOperation;
  }
  onClickPlus()     { this.newOperation('+'); }
  onClickMinus()    { this.newOperation('-'); }
  onClickMultiply() { this.newOperation('*'); }
  onClickDivide()   { this.newOperation('/'); }

  doEvaluation() {
    this.result = eval(this.operation);
  }

  validate() {
    var arrayOfChar = Array.from(this.operation.trim());
    var lastChar = arrayOfChar[arrayOfChar.length-1];

    if ( lastChar === ''  || lastChar === undefined || lastChar === '+' ||
         lastChar === '-' || lastChar === '*'       || lastChar === '/' ) {
      return false;
    }
    return true;
  }

  onClickReset() {
    this.result = '';
    this.operation = '';
  }

  onClickDelete() {
    var length = this.operation.length;
    if (length > 0) {
      this.operation = this.operation.substring(0, length-1 );
    }
  }

}
