import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css'],
})
export class ProfilesListComponent implements OnInit {
  profiles: Profile[] = [];

  constructor(private profilesService: ProfilesService) {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles() {
    this.profilesService.getAll().subscribe(
      (data) => {
        this.profiles = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
