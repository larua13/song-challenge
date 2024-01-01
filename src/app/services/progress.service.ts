import { Injectable } from '@angular/core';
import { ChallengeProgress, Challenge } from '../shared/data/menu.data';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  private challengeProgress: Challenge[];

  constructor() {
    const localProgress = localStorage.getItem('progress');
    this.challengeProgress = localProgress
      ? JSON.parse(localProgress)
      : ChallengeProgress;
  }

  saveProgress(id: string): void {
    const challenge = this.challengeProgress.find(
      (challenge: Challenge) => challenge.id === id
    );
    if (challenge) {
      challenge.resolve = true;
    }
    localStorage.setItem('progress', JSON.stringify(this.challengeProgress));
  }

  getProgress(id: string): boolean {
    const challenge = this.challengeProgress.find(
      (challenge: Challenge) => challenge.id === id
    );
    if (challenge) {
      return challenge.resolve;
    } else {
      return false;
    }
  }

  getAllProgress(): Challenge[] {
    return this.challengeProgress;
  }

  restart(): void {
    localStorage.removeItem('progress');
    this.challengeProgress = ChallengeProgress;
  }
}
