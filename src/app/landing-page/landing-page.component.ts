import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('bannerAnimation', [
      transition(':enter', [
        style({ opacity: 0 }), // Initial state
        animate('300ms', style({ opacity: 1 })) // Animation to the final state
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })) // Animation for leaving
      ])
    ])
  ]
})

export class LandingPageComponent {
  isLoggedIn = false;

  constructor(private router: Router) {}

  categories = [
    { name: 'Moda', description: 'Los productos de ropa son prendas diseñadas para vestir y expresar estilo personal. Incluyen una variedad de artículos, como camisetas, pantalones, vestidos y accesorios, que combinan funcionalidad y estética, reflejando tendencias culturales y de moda.', image: 'assets/moda.png' },
    { name: 'Tecnología', description: 'Los productos tecnológicos son dispositivos y herramientas que aplican ciencia para facilitar tareas y resolver problemas, como smartphones, computadoras y electrodomésticos.', image: 'assets/tecnologia.png' },
    { name: 'Comida', description: 'Los productos de comida son alimentos y bebidas destinados al consumo humano, que pueden ser frescos, procesados o preparados. Varían en tipos, sabores y nutrientes, y están diseñados para satisfacer necesidades dietéticas, culturales y de conveniencia.', image: 'assets/comida.png' },
    { name: 'Servicios', description: 'Los productos de servicios son intangibles ofrecidos para satisfacer necesidades o resolver problemas, que pueden incluir actividades como asesoría, transporte, entretenimiento y educación. Se centran en proporcionar valor y experiencia al cliente, en lugar de bienes físicos.', image: 'assets/servicios.png' },
    { name: 'Other', description: 'Los productos "otros" abarcan una amplia variedad de bienes y servicios que no se clasifican fácilmente en categorías específicas, como herramientas, artículos de hogar, juguetes y productos de belleza. Estos productos ofrecen soluciones y satisfacen diversas necesidades y gustos del consumidor.', image: 'assets/other.png' },

  ];

  bannerImages = [
    'assets/banner1.jpg',
    'assets/banner2.jpg',
    'assets/banner3.jpg',
  ];

  currentBannerIndex = 0;

  // Sell section details
  sellSection = {
    title: 'Vender',
    subtitle: 'Impulsa tu negocio con "Made In"',
    bodyText: 'Descubre cómo puedes vender en nuestra plataforma y los beneficios que ofrecemos a los vendedores.',
    topImage: 'assets/sell-image.png',
    bottomImage: 'assets/sell-image-bottom.png',
    bottomTitle: 'Cómo Vender',
    bottomSubtitle: 'Empezar a Vender',
    bottomBodyText: 'Información adicional sobre el proceso de venta y ejemplos de éxito.'
  };

  previousBanner() {
    this.currentBannerIndex = (this.currentBannerIndex - 1 + this.bannerImages.length) % this.bannerImages.length;
  }

  nextBanner() {
    this.currentBannerIndex = (this.currentBannerIndex + 1) % this.bannerImages.length;
  }

  navigateTo(num: number) {
    if(num == 1)
      this.router.navigate(['/view/productos'])
    else if(num == 2)
      this.router.navigate(['/registro'])
  }

  createAccount() {
    //console.log('Create account');
    this.router.navigate(['/registro']).catch(err => {
      //console.error('Navigation error:', err);
    });
  }

  login() {
    //console.log('Login');
    this.router.navigate(['/inicio-sesion']).catch(err => {
      //console.error('Navigation error:', err);
    });
  }
  

  logout() {
    //console.log('Logout');
  }

  sell() {
    //console.log('Sell section');
  }
} 