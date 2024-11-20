import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './view/counter/counter.component';
import { MembersComponent } from './view/members/members.component';
import { CountdownComponent } from './view/components/countdown/countdown.component';
import { HeroComponent } from './view/sections/hero/hero.component';
import { MissionComponent } from './view/sections/mission/mission.component';
import { VisionComponent } from './view/sections/vision/vision.component';
import { ValuesComponent } from './view/sections/values/values.component';
import { SponsorsComponent } from './view/sections/sponsors/sponsors.component';
import { FaqComponent } from './view/sections/faq/faq.component';
import { MemberCardComponent } from './view/components/member-card/member-card.component';
import { AboutComponent } from './view/about/about.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxTranslateModule } from './translate/translate.module';
import { CompetitionComponent } from './view/sections/competition/competition.component';
import { JoinComponent } from './view/sections/join/join.component';
import { StoryComponent } from './view/sections/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CounterComponent,
    MembersComponent,
    CountdownComponent,
    HeroComponent,
    MissionComponent,
    VisionComponent,
    ValuesComponent,
    SponsorsComponent,
    FaqComponent,
    MemberCardComponent,
    AboutComponent,
    CompetitionComponent,
    JoinComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxTranslateModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
