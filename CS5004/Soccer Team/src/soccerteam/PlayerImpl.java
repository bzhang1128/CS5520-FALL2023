package soccerteam;

import java.time.LocalDate;

public class PlayerImpl implements Player {
  String firstName;
  String lastName;
  LocalDate dateOfBirth;
  Position preferredPosition;
  int skillLevel;
  

  @Override public String getFirstName() {
    return null;
  }

  @Override public String getLastName() {
    return null;
  }

  @Override public LocalDate getDateOfBirth() {
    return null;
  }

  @Override public Position getPreferredPosition() {
    return null;
  }

  @Override public int getSkillLevel() {
    return 0;
  }
}
