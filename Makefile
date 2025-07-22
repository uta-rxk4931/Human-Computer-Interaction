########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = RENCY AJIT KANSAGRA
SID = 1001844931
EMAIL = rxk4931@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT = PROJ04
VIDEO_URL = "https://youtu.be/1hBzsqFvy-I"
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)
  @echo $(VIDEO_URL)

submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"
	@echo "Download the zip and upload to Canvas!"
