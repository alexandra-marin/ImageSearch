import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

export const routes = [
  { path: '', component: SearchComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
];
