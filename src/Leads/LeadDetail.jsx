import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import About from "../About/About";
import Tasks from "../Task/Tasks";
import Opportunities from "../Opportunities/Opportunities";
import File from "../Files/File";
import Estimate from "../Estimate/Estimate";
import CustomCard from "../CustomFields/CustomCard";
import ContactCard from "../Contacts/ContactCard";
import FilterListIcon from "@mui/icons-material/FilterList";
import LeadCreated from "../Thread/LeadCreated";
import OpportunityStatus from "../Thread/OpportunitiesStatus";
import StatusChanged from "../Thread/StatusChanged";
import SMSCard from "../Thread/SMSCard";
import CallLog from "../Thread/CallLog";
import CallBox from "../Thread/CallBox";
import NoteBox from "../Thread/NoteBox";
import EmailBox from "../Thread/EmailBox";
import { useDispatch, useSelector } from "react-redux";
import { toggleNotes, toggleCall, toggleEmail, toggleSms } from "../Store/VisibilitySlice";
import Email from "../Thread/Email";
import LeadNote from "../Thread/LeadNote";

const LeadDetail = () => {
    const dispatch = useDispatch();
    const showNotes = useSelector((state) => state.visibility.showNotes);
    const showEmail = useSelector((state) => state.visibility.showEmail);
    const showCall = useSelector((state) => state.visibility.showCall);
    const showSms = useSelector((state) => state.visibility.showSms);
  
  const [selectedLeftTab, setSelectedLeftTab] = useState(0);
  const [selectedRightTab, setSelectedRightTab] = useState(0);

  return (
    <Box sx={{ display: "flex", marginLeft: "229px", mt: 9 }}>
      {/* minHeight: "100vh", */}
      <Box
        sx={{ flex: 4, overflowY: "auto", overflowX: "hidden", height: "80vh" }}
      >
        <Paper
          elevation={3}
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <Box
            sx={{
              position: "fixed",
              top: 0,
              mt: 14,
              width: "450px",
              backgroundColor: "white",
              zIndex: 100,
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              value={selectedLeftTab}
              onChange={(e, val) => setSelectedLeftTab(val)}
            >
              <Tab label="Details" />
              <Tab label="Estimates" />
              <Tab label="Files" />
            </Tabs>
          </Box>
          <Box sx={{ flex: 1, overflowY: "auto", padding: "41px 10px" }}>
            {selectedLeftTab === 0 && (
              <div>
                <Box>
                  <About />
                </Box>
                <Box>
                  <Tasks />
                </Box>
                <Box>
                  <Opportunities />
                </Box>
                <Box>
                  <ContactCard />
                </Box>
                <Box>
                  <CustomCard />
                </Box>
              </div>
            )}
            {selectedLeftTab === 1 && (
              <Box>
                <Estimate />
              </Box>
            )}
            {selectedLeftTab === 2 && (
              <Box>
                <File />
              </Box>
            )}
          </Box>
        </Paper>
      </Box>

      {/* Right Section with Tabs */}
      <Box
        sx={{
          flex: 8,
          overflowY: "auto",
          overflowX: "hidden",
          height: "80vh",
          maxHeight: "100%",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              mt: 14,
              // width: "770px",
              width: "750px",
              backgroundColor: "white",
              zIndex: 100,
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // ml:-6,
            }}
          >
            <Tabs
              value={selectedRightTab}
              onChange={(e, val) => setSelectedRightTab(val)}
            >
              <Tab label="All" sx={{ fontSize: "12px" }} />
              <Tab label="Important" sx={{ fontSize: "12px" }} />
              <Tab label="Conversations" sx={{ fontSize: "12px" }} />
              <Tab label="Notes & Summaries" sx={{ fontSize: "12px" }} />
            </Tabs>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, pr: "10px" }}
            >
              <TextField
                size="small"
                variant="outlined"
                placeholder="Search"
                sx={{ width: 200, height: 34, paddingLeft: "10px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ flex: 1, overflowY: "auto", padding: "41px 0px" }}>
            {selectedRightTab === 0 && (
              <div>
                <Box>
                  <LeadCreated />
                </Box>
                <Box>
                  <OpportunityStatus />
                </Box>
                <Box>
                  <StatusChanged />
                </Box>
                <Box>
                  <Email/>
                </Box>
                <Box>
                  <SMSCard />
                </Box>
                  <Box>
                    <LeadNote/>
                  </Box>
                <Box>
                  <CallLog />
                </Box>
                <Box>
                 {showNotes && <NoteBox/>}
                </Box>
                <Box>
                 {showEmail && <EmailBox/>}
                </Box>
                <Box>
                  {showCall && <CallBox/>}
                </Box>
                <Box>
                  {showSms && <NoteBox />} {/* Show NotesBox */}
                </Box>

              </div>
            )}
            {selectedRightTab === 1 && (
              <Typography>Important Content</Typography>
            )}
            {selectedRightTab === 2 && (
              <Typography>Conversations Content</Typography>
            )}
            {selectedRightTab === 3 && (
              <Typography>Notes & Summaries Content</Typography>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default LeadDetail;
