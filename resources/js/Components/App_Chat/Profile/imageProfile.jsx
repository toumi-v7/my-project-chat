import { usePage } from "@inertiajs/react";

function ImageProfile() {
    const url = usePage().props.url
    return ( 
    <>
                            <div className="profile-img text-primary rounded-top-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 400 140.74"><defs></defs><g><g><path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z"/>
                                <path  className="cls-2"  style={{"fill":"#fff","opacity":"0.1"}} d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z"/><path className="cls-2" style={{"fill":"#fff","opacity":"0.1"}}  d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.3c.18.8.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.6-1.9l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.1,119.15,12.12,119.34,12.14,119.53Z"/><circle className="cls-2" style={{"fill":"#fff","opacity":"0.1"}}  cx="94.5" cy="57.5" r="22.5"/><path className="cls-2" style={{"fill":"#fff","opacity":"0.1"}}  d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z"/></g></g></svg>

                                <div className="position-absolute top-0 start-0 py-6 px-5">
                                    <button type="button" className="btn-close btn-close-white btn-close-arrow opacity-100" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>

                            
    </> 
    );
}

export default ImageProfile;