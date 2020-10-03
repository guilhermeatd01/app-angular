import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesService } from 'src/app/services/profiles.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-profiles-detail',
  templateUrl: './profiles-detail.component.html',
  styleUrls: ['./profiles-detail.component.css'],
})
export class ProfilesDetailComponent implements OnInit {
  title = 'Novo Perfil';
  profile: Profile = {
    id: 0,
    description: '',
  };

  constructor(
    private profilesService: ProfilesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProfile(parseInt(id));
    }
  }

  loadProfile(id: number) {
    this.profilesService.get(id).subscribe(
      (data) => {
        this.profile = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  saveProfile() {
    const { id, description } = this.profile;

    const profile = {
      description
    };

    if (id) {
      this.profilesService.update(id, profile).subscribe(
        (response) => {
          this.router.navigate(['/profiles']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.profilesService.create(profile).subscribe(
        (response) => {
          this.router.navigate(['/profiles']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  deleteProfile() {
    this.profilesService.delete(this.profile.id).subscribe(
      (data) => {
        this.router.navigate(['/profiles']);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
