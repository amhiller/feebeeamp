import React, {useEffect, useState} from 'react';

import { Link } from 'react-router-dom';

import { API } from 'aws-amplify';

import { listProfiles } from 'graphql/queries';

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import profile from 'layouts/profile';
import Edit from '@mui/icons-material/Edit'
import Location from '@mui/icons-material/LocationOn'
import Person from '@mui/icons-material/Person'
import Phone from '@mui/icons-material/Phone'
import Email from '@mui/icons-material/Email'
import House from '@mui/icons-material/House'
import Construction from '@mui/icons-material/Construction'

const initialProfileState = { firstName: '', lastName: '', companyName: '', bio: '', owner_id: ''}

function Profile() {

  const [ profileData, setProfileData ] = useState(initialProfileState)
  const first = false;
  
  useEffect(() => {
    FetchProfiles();
  }, []);

  async function FetchProfiles() {
    console.log("Fetching Profiles")
    try {
      const profileDatav1 = await API.graphql({query: listProfiles})
      if(!profileDatav1.data.listProfiles.items.length) {
        console.log("not first")
        first = true;
      } 
      else {
        setProfileData(profileDatav1.data.listProfiles.items[0])
        console.log(profileDatav1.data.listProfiles.items[0])
      }
    } catch (err) {
      console.log(err)
    }
    
  }

  return (
    <div>

      <Box sx={{
        bgcolor: '#ffffff',
        color: '#000000',
        height: 360,
        borderRadius: 2,
        m: 4
        }}>

        <Box sx={{
          p: 8,
          bgcolor: '#D3F8FB',
          color: '#041E77',
          height: 200,
          fontWeight: 'bold',
          fontSize: 48,
          textAlign: 'center',
        }}>

          <Box >
            {profileData.companyName}
          </Box>

        </Box>

        <Box sx={{
          height: 160
        }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Box sx={{
                textAlign: 'center',
                color: '#000000',
                m: 2
              }}>
                <Box>
                  {profileData.firstName} {profileData.lastName}
                </Box>
                <Box>
                  {profileData.address}
                </Box>   
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{
                textAlign: 'center',
                m: 4
              }}>
                {profileData.bio}
              </Box>
            </Grid>
            <Grid item xs>
              <Box sx={{
                textAlign: 'center'
              }}>
                <Link to="/edit-profile">
                  <Button variant="outlined" endIcon={<Edit/>}sx={{
                    color: '#1EC1CB',
                    bgcolor: '#ffffff',
                    borderColor: '#1EC1CB',
                    m: 2
                  }}>
                    Edit Profile
                  </Button>
                </Link>

                <Box>
                  {profileData.address}
                </Box>
                <Box sx={{
                  fontSize: 15
                }}>
                  <Location />
                  Owner at {profileData.companyName}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{
        bgcolor: '#ffffff',
        height: 200,
        m: 4,
        borderRadius: 2
      }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{
              height: 25,
              m: 3
            }}>
              <Box sx={{
                textAlign: 'center',
                color: '#000000'
              }}>
                <Person /> {profileData.firstName} {profileData.lastName}
              </Box>

            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              height: 25,
              m: 3
            }}>
              <Box sx={{
                textAlign: 'center',
                color: '#000000'
              }}>
                <Phone /> {profileData.phoneNumber}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              height: 25,
              m: 3
            }}>
              <Box sx={{
                textAlign: 'center',
                color: '#000000'
              }}>
                <House /> {profileData.address}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              height: 25,
              m: 3
            }}>
              <Box sx={{
                textAlign: 'center',
                color: '#000000'
              }}>
                <Construction /> {profileData.companyName}
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Box>

      

    </div>

    
  )
}

export default Profile