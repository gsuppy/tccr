import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  route$: Observable<string | undefined> = of("");

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route$ = this.route.title;
    this.route$.subscribe((url) => console.log(url));
  }
}
