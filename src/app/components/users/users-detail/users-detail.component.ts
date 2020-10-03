import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ProfilesService } from 'src/app/services/profiles.service';
import { Profile } from 'src/app/components/profiles/profile';
import { User } from '../user';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
})
export class UsersDetailComponent implements OnInit {
  title = 'Novo Usuário'
  user: User = {
    id: 0,
    name: '',
    profiles: [],
  };

  profiles: Profile[] = [];

  constructor(
    private usersService: UsersService,
    private profilesService: ProfilesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadUser(parseInt(id));
    } else {
      this.loadProfiles();
    }
  }

  loadUser(id:number) {
    this.usersService.get(id).subscribe(
      (data) => {
        this.user = data;
        this.loadProfiles();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  loadProfiles() {
    this.profilesService.getAll().subscribe(
      (data) => {
        this.profiles = data;
        this.removeUserProfilesOfList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeUserProfilesOfList() {
    this.user.profiles.forEach(userProfile => {
      this.profiles = this.profiles.filter(profile => profile.id !== userProfile.id);
    });
  }

  selectProfile(profile: Profile, index: number) {
    this.user.profiles.push(profile);
    this.profiles.splice(index, 1);
  }

  removeProfile(profile: Profile, index: number) {
    this.profiles.push(profile);
    this.user.profiles.splice(index, 1);
  }

  saveUser(): void {
    const { id, name, profiles } = this.user;
    const profileIDs = profiles.map((profile) => profile.id);

    const user = {
      name,
      profileIDs,
    };

    if (id) {
      this.usersService.update(id, user).subscribe(
        (response) => {
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.usersService.create(user).subscribe(
        (response) => {
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  deleteUser() {
    this.usersService.delete(this.user.id).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
