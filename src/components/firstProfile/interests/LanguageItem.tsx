/*const LanguageItem = ({ language }: { language: string }) => {
    const { classes } = useStyles()

    return (
        <Box className={classes.item}>
          <Typography className={classes.itemTitle}>Language</Typography>
          <IconButton
            className={classes.arrowRightBtn}
            disableFocusRipple={true}
            disableRipple={true}
          >
            <ArrowRightBtn
              isOpen={isLanguageOpen}
              onToggle={(isOpen) => {
                setIsLanguageOpen(isOpen)
                if (selectedLanguages.length === 0 && isOpen) {
                  setIsLanguagePopUpOpen(true)
                }
              }}
            />
          </IconButton>
          {isLanguageOpen && (
            <Box className={classes.chipContainer}>
              {selectedLanguages.map((language, index) => (
                <ChipWithClose
                  onClose={() => {
                    setSelectedLanguages(
                      selectedLanguages.filter((l) => l !== language)
                    )
                  }}
                  key={index}
                  label={language}
                />
              ))}
              <MuiLink
                className={classes.muiLink}
                component="button"
                variant="body2"
                sx={{ marginLeft: 'auto' }}
                onClick={() => setIsLanguagePopUpOpen(true)}
              >
                add more
              </MuiLink>
            </Box>
          )}
          <Dialog
            open={isLanguagePopUpOpen}
            onClose={() => setIsLanguageOpen(false)}
            className={classes.dialog}
          >
            <DialogActions>
              <Button
                onClick={() => setIsLanguagePopUpOpen(false)}
                sx={{
                  position: 'absolute',
                  top: '16px',
                  right: '1px',
                }}
              >
                <CloseIcon sx={{ color: theme.palette.text.primary }} />
              </Button>
            </DialogActions>
            <DialogTitle className={classes.dialogTitle}>
              Languages you speak
            </DialogTitle>
            <DialogContent>
              <LanguageSelector
                onSelectedLanguages={handleSelectedLanguages}
                selectedLanguages={selectedLanguages}
              />
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    )
}*/
