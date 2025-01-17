declare module foundry {
    module data {
        /**
         * An inner-object which defines the schema for how Tile video backgrounds are managed
         * @property loop     Automatically loop the video?
         * @property autoplay Should the video play automatically?
         * @property volume   The volume level of any audio that the video file contains
         */
        interface VideoData {
            loop: boolean;
            autoplay: boolean;
            volume: boolean;
        }
    }
}
