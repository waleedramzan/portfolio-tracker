import Head from 'next/head';
import { useState } from 'react';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewCompanies } from 'src/sections/overview/overview-companies';
import { OverviewLatestNews } from 'src/sections/overview/overview-latest-news';
import { OverviewPrice } from 'src/sections/overview/overview-price';
import { OverviewCompanyProfile } from 'src/sections/overview/overview-company-profile';

import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro';

import { 
  APPLE_NEWS,
  TESLA_NEWS, 
  NVIDIA_NEWS, 
  COMPANIES_OVERVIEW, 
  APPLE_PROFILE, 
  NVIDIA_PROFILE, 
  TESLA_PROFILE 
} from 'src/db'

const Page = () => {
  const [news, setNews] = useState(APPLE_NEWS);
  const [selectedCompany, setSelectedCompany] = useState(APPLE_PROFILE)

  const handleClick = (companyName) => {
    if (companyName === 'Apple') { setNews([...APPLE_NEWS]); setSelectedCompany({...APPLE_PROFILE}) }
    if (companyName === 'Tesla') { setNews([...TESLA_NEWS]); setSelectedCompany({...TESLA_PROFILE}) }
    if (companyName === 'Nvidia') { setNews([...NVIDIA_NEWS]); setSelectedCompany({...NVIDIA_PROFILE}) }
  }

  return (
    <>
      <Head>
        <title>
          Portfolio Tracker
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            justifyContent='flex-end'
          >
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker localeText={{ start: 'Start', end: 'End' }} />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 2,
          pb: 8
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              lg={12}
            >
              <OverviewPrice
                chartSeries={
                  [{
                    name: 'Apple',
                    data: [31, 40, 28, 51, 42, 109, 100]
                  }, {
                    name: 'Tesla',
                    data: [11, 32, 45, 32, 34, 52, 41]
                  }, {
                    name: 'Nvidia',
                    data: [5, 16, 22, 16, 17, 26, 20]
                  }]
                }
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={6}
            >
              <OverviewCompanies
                companies={COMPANIES_OVERVIEW}
                handleClick={handleClick}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={6}
            >
              <OverviewCompanyProfile
                company={selectedCompany}
              />
            </Grid>
            <Grid
              xs={12}
              md={12}
              lg={12}
            >
              <OverviewLatestNews
                news={news}
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
