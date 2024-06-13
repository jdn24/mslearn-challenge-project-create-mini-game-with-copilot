import random
#The player can choose to continue or quit the game after each round.
#The player's score is displayed at the end of each game. 
#The player's score is reset to 0 when the player quits the game. 
#The player must be able to quit the game at any time by typing 'quit'.
#The game must handle inputs that are not valid. 
#The game must be able to handle inputs in both upper and lower case. 
#The game must be able to handle inputs that begin and end with whitespace. 
#The game must be able to handle inputs that contain whitespace between characters. 
#Rock beats scissors, scissors beats paper, paper beats rock.

def game():
    player_score = 0
    while True:
        player_choice = input("Enter rock, paper, or scissors: ")
        player_choice = player_choice.strip().lower()
        if player_choice == "quit":
            print("Your score is", player_score)
            player_score = 0
            break
        if player_choice not in ["rock", "paper", "scissors"]:
            print("Invalid input")
            continue
        computer_choice = random.choice(["rock", "paper", "scissors"])
        print("Computer chose", computer_choice)
        if player_choice == computer_choice:
            print("It's a tie!")
        elif (player_choice == "rock" and computer_choice == "scissors") or (player_choice == "scissors" and computer_choice == "paper") or (player_choice == "paper" and computer_choice == "rock"):
            print("You win!")
            player_score += 1
        else:
            print("You lose!")
    return player_score

game()


