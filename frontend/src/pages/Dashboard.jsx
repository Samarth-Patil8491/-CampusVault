import { Grid } from "@mui/material";

import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";
import RecentUploads from "../components/RecentUploads";
import TrendingNotes from "../components/TrendingNotes";
import PopularSubjects from "../components/PopularSubjects";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";

import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";

function Dashboard() {
  return (
    <Layout>
      <Grid
        container
        spacing={3}
        alignItems="stretch"
      >
        {/* ================= Hero ================= */}

        <Grid item xs={12} lg={9}>
          <HeroBanner />
        </Grid>

        {/* ================= Profile ================= */}

        <Grid item xs={12} lg={3}>
          <ProfileCard />
        </Grid>

        {/* ================= Statistics ================= */}

        <Grid item xs={12} sm={6} lg={3}>
          <StatsCard
            title="Total Notes"
            value="248"
            color="#2563EB"
            icon={<DescriptionRoundedIcon />}
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <StatsCard
            title="Uploads"
            value="32"
            color="#10B981"
            icon={<CloudUploadRoundedIcon />}
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <StatsCard
            title="Downloads"
            value="1.2K"
            color="#F59E0B"
            icon={<DownloadRoundedIcon />}
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <StatsCard
            title="Bookmarks"
            value="56"
            color="#EC4899"
            icon={<BookmarkRoundedIcon />}
          />
        </Grid>

        {/* ================= Recent Uploads ================= */}

        <Grid item xs={12} lg={8}>
          <RecentUploads />
        </Grid>

        {/* ================= Trending Notes ================= */}

        <Grid item xs={12} lg={4}>
          <TrendingNotes />
        </Grid>

        {/* ================= Popular Subjects ================= */}

        <Grid item xs={12} lg={6}>
          <PopularSubjects />
        </Grid>

        {/* ================= Recent Activity ================= */}

        <Grid item xs={12} lg={6}>
          <RecentActivity />
        </Grid>

        {/* ================= Quick Actions ================= */}

        <Grid item xs={12}>
          <QuickActions />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Dashboard;