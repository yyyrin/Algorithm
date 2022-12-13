# [BOJ]4153. 직각삼각형
# 직각삼각형인지 판별하는 문제

# while True -> 반복 횟수가 정해져 있지 않을 때 사용

while True:  # 참일 동안 계속 반복한다.
    numbers = list(map(int, input().split()))  # 세 변의 길이를 list로 저장한다.
    if sum(numbers) == 0:  # 세 변이 모두 0인 경우는 마지막 줄을 나타낸다. 출력값은 없다.
        break
    numbers.sort()         # list 오름차순으로 정렬하기
    if numbers[-1] ** 2 == numbers[0] ** 2 + numbers[1] ** 2:   # 직각삼각형의 조건을 만족한다면
        print("right")
    else:  # 직각삼각형의 조건을 만족하지 않는다면
        print("wrong")

#-----------------------------------
## 런타임 에러 : while문의 끝을 정하지 않았다.
# while True:
#     numbers = list(map(int, input().split()))
#     numbers.sort()
#     if numbers[-1] ** 2 == numbers[0] ** 2 + numbers[1] ** 2:
#         print("right")
#     else:
#         print("wrong")
#------------------------------------------
## 틀린 코드
# def rightTriangle(numbers):
#     numbers.sort()
#     if numbers[-1] ** 2 == numbers[0] ** 2 + numbers[1] ** 2:
#         return "right"
#     else:
#         return "wrong"
#
# while sum(list(map(int, input().split()))) != 0:
#     numbers = list(map(int, input().split()))
#     print(rightTriangle(numbers))

# numbers = []
# numbers.append(map(int, input()))
# print(numbers)

# => while문을 어떻게 사용할지 감을 잡지 못해서 발생한 문제. while True 사용에 익숙해지자.