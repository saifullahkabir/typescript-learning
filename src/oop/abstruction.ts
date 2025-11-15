// oop - abstruction

// idea
// implementation

/**
 * 1. interface
 * 2. abstract class
 */

//* using interface
// idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer{
//     play(): void {
//         console.log("Playing Music...");
//     }
//     pause(): void {
//         console.log("Music Paused...");
//     }
//     stop(): void {
//         console.log("Music Stoped...");
//     }
// }

// const DJBaharul = new MusicPlayer();  // instance
// DJBaharul.play();

//* using abstract

//idea
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

// implementation
class MusicPlayer extends MediaPlayer{
    play(): void {
        console.log('Playing Music...');
    }
    pause(): void {
        console.log('Music Paused...');
    }
    stop(): void {
        console.log('Music Stoped...');
    }
}

const DJBaharul = new MusicPlayer();
DJBaharul.stop()
