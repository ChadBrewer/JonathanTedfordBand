import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


declare var gapi: any;

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

    videos: YoutubeVideo[] = [
        { Id: 'j0ASMZq6GLQ', viewCount: null },
        { Id: 'EIF_iIns8CM', viewCount: null },
        { Id: '8vaXX9E8ymc', viewCount: null }
    ];

    constructor(public sanitizer: DomSanitizer) { }

    ngOnInit() {
        fetch('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=j0ASMZq6GLQ%2C+8vaXX9E8ymc%2C+EIF_iIns8CM&key=AIzaSyCQWO_wMffV1woZBw6kImifTyGgUxcc3CI').then(res => {
            return res.json();
        }).then(response => {
            response.items.forEach(item => {
                const foundVideoIndex = this.videos.findIndex(v => v.Id === item.id)
                this.videos[foundVideoIndex].viewCount = +item.statistics.viewCount;
            });
        });
    }
}
