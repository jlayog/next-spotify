This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Project in progress...

This project is to familiarize myself with TypeScript, Authentication, and Stripe better. Made with Tailwind and Supabase.

TODO: 
- ~~Debug Toaster Package~~
- ~~Finish Upload Modal~~
- ~~Create form for mp3 upload~~
- ~~Configure database for song schema~~
- ~~Song fetch from Supabase~~
- workflow:
  ## Displaying songs on the homepage

  display_songs_homepage:

  description: "Display a list/grid of songs on the homepage."

  tasks:

      - name: "Fetch songs from database"
        # Fetch songs from the database using backend API.
        details: "Use the existing API to fetch songs for the homepage."
      - name: "Integrate with frontend"
        # Display the fetched songs in the chosen layout on the frontend.
        details: "Iterate through fetched songs and display them on the page."

  ## Additional Features (Optional)

  additional_features:

  description: "Additional features or improvements to enhance the site."

  tasks:

      - name: "User playlists"
        details: "Allow users to create and manage custom playlists."
      - name: "Search functionality"
        details: "Let users search for songs, artists, and albums."

  ## Create song Modal

  description: "Modal for invidual songs when selected."

  tasks:
    TBD

## System Design keypoints

### Scaling: 

  - Content Delivery Network (CDN):

    - Use a CDN to distribute song files and other static assets closer to users. This decreases load times and reduces strain on primary servers.

 - Load Balancers:

    - Distribute incoming traffic to various servers to prevent any single server from getting overwhelmed.
    
- Caching:

    - Introduce caching layers (like Redis) to store frequent database queries or session information. This significantly reduces database load.
 
### Shortfalls

- One person testing, perhaps consider playwright or other services to test the site.

Will think of more when it comes to mind...
