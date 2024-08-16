import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  password: string = '';
  length: number = 12; // Longitud predeterminada de la contraseña

  generatePassword(): void {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:",.<>?/';
    let password = '';
    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    this.password = password;
  }

  onGeneratePassword(): void {
    this.generatePassword();
  }

  getButtonClass(): string {
    if (this.length == 8) {
      return 'btn-short';
    } else if (this.length <= 11) {
      return 'btn-medium';
    } else {
      return 'btn-long';
    }
  }
}