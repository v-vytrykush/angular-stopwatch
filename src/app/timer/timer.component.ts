import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sec: any = '0' + 0;
  min: any = '0' + 0;

  startTimer: any;
  running = false;

  wait(): void {
    clearInterval(this.startTimer);
    this.running = false;
  }

  start(): void {
    if (!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {
        this.sec++;

        this.sec =  this.sec < 10 ? '0' + this.sec : this.sec;

        if(this.sec === 60) {
          this.min++;

          this.min = this.min < 10 ? '0' + this.min : this.min;

          this.sec = '0' + 0;
        }
      }, 1000);
    } else {
      this.stop();
    }
  }

  stop(): void {
    clearInterval(this.startTimer);
    this.running = false;
  }

  reset(): void {
    clearInterval(this.startTimer);
    this.running = false;
    this.min = this.sec = '0' + 0;
    this.start();
  }
}
