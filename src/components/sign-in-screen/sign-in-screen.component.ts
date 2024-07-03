import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sign-in-screen',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in-screen.component.html',
  styleUrl: './sign-in-screen.component.css'
})
export class SignInScreenComponent {

  formData = { email: '', password: '' };

  onSubmit() {
    if (this.formData.email && this.formData.password) {
      console.log('Form data:', this.formData);
    } else {
      window.alert('All fields are required');
    }
  }

  onButtonClick(event: Event) {
    event.preventDefault();
    console.log('Button clicked, but default form submission is prevented');
    this.onSubmit();
  }
}


