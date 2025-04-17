import { Welcome }  from './Welcome';

export function DriveWelcome() {
   
    return (
        <div>
            {/* <Welcome loggedIn={true}></Welcome> */}
            <Welcome loggedIn={false}></Welcome>
        </div>
    );
}