import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor( private auth: AuthService) { }

  ngOnInit() {
/*   this.auth.hand
 */
 }

}






