import { Component, OnInit } from '@angular/core';
// import {SpotifyApi} from '@spotify/web-api-ts-sdk'

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  

  constructor(
  ) {}
  
  public musicLinks: MusicCard[] = [];
  public spotifyUrl = "https://open.spotify.com/artist/1mHoO7ShVYbkxXI2HRixX4?si=HwCtwxp0Rs-RQ4Gc7Pqu_Q";
  private appleUrl = "https://music.apple.com/us/artist/the-moat/1803834713"

  ngOnInit(): void {
    this.musicLinks.push(new MusicCard("Spotify", this.spotifyUrl, "assets/logos/spotify.png", "story-bg"));
    this.musicLinks.push(new MusicCard("Apple Music", this.appleUrl, "assets/logos/apple.png", "story-bg2"));
  }

 public openLink(url:string){
    //@ts-ignore
    window.open(url, '_blank').focus();
  }

}

class MusicCard{
  title: string;
  url: string;
  iconRef: string;
  className:string;

  constructor(title:string, url:string, iconRef: string, className: string){
    this.title = title;
    this.url = url;
    this.iconRef = iconRef;
    this.className = className
  }
}
