import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  selectedCategory = 'all';

  categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'apartment', label: 'Apartmanlar' },
    { id: 'site', label: 'Siteler' },
    { id: 'completed', label: 'Tamamlanan' }
  ];

  projects = [
    {
      id: 1,
      title: 'İrem Park Apt.',
      location: 'Kahramanmaraş',
      year: '2020',
      category: 'apartment',
      status: 'completed',
      image: '/assets/proje5.jpeg',
      description: 'Modern mimari ve kaliteli işçilikle tamamlanan 24 daireli apartman projesi.'
    },
    {
      id: 2,
      title: 'Mevsim Sitesi',
      location: 'Kahramanmaraş',
      year: '2019',
      category: 'site',
      status: 'completed',
      image: '/assets/proje6.jpg',
      description: 'Sosyal donatı alanları ile modern yaşam kompleksi.'
    },
    {
      id: 3,
      title: 'Fatih Apt.',
      location: 'Kahramanmaraş',
      year: '2021',
      category: 'apartment',
      status: 'completed',
      image: '/assets/harman.jpeg',
      description: 'Merkezi konumda lüks apartman projesi.'
    },
    {
      id: 4,
      title: 'Maraşhan Sitesi',
      location: 'Kahramanmaraş',
      year: '2018',
      category: 'site',
      status: 'completed',
      image: '/assets/proje2.jpg',
      description: 'Geniş yeşil alanları ile aile dostu site projesi.'
    },
    {
      id: 5,
      title: 'Karamanlı Apt.',
      location: 'Kahramanmaraş',
      year: '2022',
      category: 'apartment',
      status: 'completed',
      image: '/assets/3.jpg',
      description: 'Modern tasarım ve konforlu yaşam alanları.'
    },
    {
      id: 6,
      title: 'İnci Sitesi B Blok',
      location: 'Kahramanmaraş',
      year: '2023',
      category: 'site',
      status: 'completed',
      image: '/assets/0.jpg',
      description: 'Yeni nesil akıllı ev sistemleri ile donatılmış site projesi.'
    }
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory || p.status === this.selectedCategory);
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }
}
