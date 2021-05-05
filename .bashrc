# Install browser-sync globally using npm preferably
# Add this lines to your .bashrc

# Get current local IP address.
export LOCAL_IP=`ipconfig getifaddr en0`

# alias # New custom command
# serve # Name of the new command
# browser-sync start # starts Browsersync server
# -s # runs the local server
# -f # watch files. // "." # current terminal directory
# --no-notify # removes a default message that indicates a connection
# --host # sets the ip address of the host
# --port # denotes in which port our server should run
alias serve="browser-sync start -s -f . --no-notify --host $LOCAL_IP --port 9000"