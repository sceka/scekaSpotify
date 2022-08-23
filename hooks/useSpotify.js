import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import spotifyApi from "../lib/spotify";
import SpotifyWebApi from "spotify-web-api-node";
function useSpotify() {
    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    });
    const { data: session, status } = useSession();

    useEffect(() => {
        // if (session) {
        //     if ((session.error = "RefreshTokenError")) {
        //         signIn();
        //     }

        spotifyApi.setAccessToken(session?.user?.accessToken);
    }, [session]);

    return spotifyApi;
}

export default useSpotify;
