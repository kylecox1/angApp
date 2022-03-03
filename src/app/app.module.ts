import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes }  from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { BackStoryComponent } from './back-story/back-story.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { BossComponent } from './boss/boss.component';
import { CharacterClassListComponent } from './character-class-list/character-class-list.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { CharacterRaceListComponent } from './character-race-list/character-race-list.component';
import { CharacterRaceDetailsComponent } from './character-race-details/character-race-details.component';
import { BosslistComponent } from './bossmonsters/bosslist/bosslist.component';
import { BossmonstersModule } from './bossmonsters/bossmonsters.module';
import { NpcsModule } from './npcs/npcs.module';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'character', component: CharacterComponent },
  {path:'class', component: CharacterClassListComponent },
  {path: 'class-detail/:index', component: ClassDetailsComponent},
  {path:'boss', component: BosslistComponent },
  {path: 'race', component: CharacterRaceListComponent },
  {path:'', redirectTo: '/class', pathMatch: 'full' },
  {path:'**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    BackStoryComponent,
    DungeonComponent,
    BossComponent,
    CharacterClassListComponent,
    ClassDetailsComponent,
    CharacterRaceListComponent,
    CharacterRaceDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BossmonstersModule,
    NpcsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
