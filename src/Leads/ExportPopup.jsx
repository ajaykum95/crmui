import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  FormLabel,
  FormGroup,
  Checkbox,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ExportPopup = ({ open, onClose, handleExportLead }) => {
  const [exportType, setExportType] = useState("leads");
  const [format, setFormat] = useState("csv");
  const [fields, setFields] = useState({
    commonFields: true,
  });

  const handleExport = () => {
    const exportData = { exportType, format, fields };
    console.log("Exporting:", exportData);
    handleExportLead(exportData); // Call the function passed from App
    onClose(); // Close the dialog after export
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Export
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          style={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers style={{ padding: "16px" }}>
        <FormControl component="fieldset" style={{ width: "100%" }}>
          <FormLabel component="legend">What would you like to export?</FormLabel>
          <RadioGroup
            value={exportType}
            onChange={(e) => setExportType(e.target.value)}
            style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <FormControlLabel value="leads" control={<Radio />} label="Leads" />
            <FormControlLabel value="contacts" control={<Radio />} label="Contacts" />
            <FormControlLabel value="opportunities" control={<Radio />} label="Opportunities" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" style={{ marginTop: "15px", width: "100%" }}>
          <FormLabel component="legend">In what format?</FormLabel>
          <RadioGroup
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <FormControlLabel value="csv" control={<Radio />} label="CSV / Excel" />
            <FormControlLabel value="json" control={<Radio />} label="JSON" />
          </RadioGroup>
        </FormControl>

        <FormGroup style={{ marginTop: "15px", width: "100%" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={fields.commonFields}
                onChange={(e) =>
                  setFields({ ...fields, commonFields: e.target.checked })
                }
              />
            }
            label="Common Fields (Lead Name, Description, URL, etc.)"
          />
        </FormGroup>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleExport} color="primary" variant="contained">
          Export
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExportPopup;
