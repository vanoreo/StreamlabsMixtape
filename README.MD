# In order for this tool to work, VLC's web UI needs to be enabled
This article explains how to enable the feature - https://github.com/azrafe7/vlc4youtube/blob/master/instructions/how-to-enable-vlc-web-interface.md
You will need to edit the config.json file to add in the VLC password you set (the username should remain blank)
You should add the password to the config file *before launching the program* else it will need to be relaunched

# You will likely be prompted for a firewall exception - This is just so the programs can access eachother on the local network, and it can all be entirely done from the same device

# All this tool does is essentially ping VLC over and over again asking for metadata and refreshes an extremely simple webpage over and over again with updated info

# When using this with Streamlabs, you should add a browser source and configure the URL to be 127.0.0.1:8081 (unless you modify the port in the config file)
This browser source will make for a nice clean overlay

# You should be good to customize the HTML/CSS/JS in the public folder all you want without major trouble
Note: Streamlabs custom CSS overrides all CSS settings made in style.css