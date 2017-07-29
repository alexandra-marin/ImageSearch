import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './components/app/app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './components/search/searchResolver/searchResolver.service';
import { MenuComponent } from './components/menu/menu.component';

export { AppComponent };
export const CORE_PROVIDERS = [SearchService];
export const CORE_DECLARATIONS = [AboutComponent, AppComponent, SearchComponent, MenuComponent];
