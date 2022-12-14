# [BOJ] 1259. 팰린드롬수
# 주어진 수의 숫자들을 뒤에서 읽어도 같다면 yes, 그렇지 않다면 no


while True:  # 참일 동안 반복한다.
    number = list(map(str, input()))  # 입력값을 string으로 받고, list에 저장한다.
    if number == ["0"]:  # 입력의 마지막 줄에는 0이 주어진다.
        break

    cnt = 0  # 팰린드롬수인지 판단하는 변수
    for i in range(len(number)//2):      # 주어진 숫자 길이를 2로 나눈 몫만큼 반복
        if number[i] == number[-1 - i]:  # 앞 뒤 숫자가 같다면
            cnt += 1                     # cnt에 1을 증가시킨다.
    if cnt == len(number)//2:            # for문을 다 돌았을 때, 앞뒤 숫자가 모두 같다면
        print("yes")                     # 팰린드롬수이므로 yes 출력
    else:                                # 아니라면
        print("no")                      # no 출력

# n = input()
# n == n[::i]
# for문 사용하지 않고 이렇게하면 더 간단하다.