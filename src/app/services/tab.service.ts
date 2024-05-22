import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

//This script would act as a service for other components by injecting TabService, which is provided in root level.
@Injectable({
    providedIn: 'root'
})

export class TabService {
    //We declared a private observable BehaviorSubject type that can store and share current active tab as a string value across other components.
    private activeTabSubject = new BehaviorSubject<string>('home');

    //Now we declared an observable that other components can subscribe to, which is going emit new values.
    activeTab$ = this.activeTabSubject.asObservable();

    //Update current active tab value
    setActiveTab(tab: string): void {
        this.activeTabSubject.next(tab);
    }
}